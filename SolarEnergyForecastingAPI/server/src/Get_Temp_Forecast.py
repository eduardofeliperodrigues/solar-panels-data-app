import requests
import datetime as dt
from datetime import timedelta
import pandas as pd
from pandas import json_normalize
from sklearn.ensemble import RandomForestRegressor
from sklearn import linear_model
import pickle
import os

script_dir = os.path.dirname(__file__)
rel_path = "ML-Models/"
ML_Models_Path = os.path.join(script_dir, rel_path)
Modelo_TempAmb_para_TempInversor = os.path.join(ML_Models_Path, "Modelo_TempAmb_para_TempInversor")
Modelo_TempInversor_para_GeracaoEnergia = os.path.join(ML_Models_Path, "Modelo_TempInversor_para_GeracaoEnergia")
Previsao_Energia = os.path.join(ML_Models_Path, "Previsao_Energia.xlsx")

RFR_TempAmb_para_TempInv = pickle.load(open(Modelo_TempAmb_para_TempInversor,'rb'))
RFR_TempInversor_para_GeracaoEnergia = pickle.load(open(Modelo_TempInversor_para_GeracaoEnergia,'rb'))

start = (dt.datetime.now() + dt.timedelta(days=1)).strftime("%d/%m/%Y 00:00:00")
end = dt.datetime.strptime(start, "%d/%m/%Y %H:%M:%S") + dt.timedelta(days=10)
end = end.strftime("%d/%m/%Y %H:00:00")


ini = dt.datetime.strptime(start, "%d/%m/%Y %H:%M:%S")
timestamp_ini = dt.datetime.timestamp(ini)

fim = dt.datetime.strptime(end, "%d/%m/%Y %H:%M:%S")
timestamp_fim = dt.datetime.timestamp(fim)

response = requests.get(
  'https://api.stormglass.io/v2/weather/point',
  params={
    'lat': -23.47091,
    'lng': -47.485144,
    'params': ','.join(['airTemperature']),
    'start': timestamp_ini,  # Convert to UTC timestamp
    'end': timestamp_fim  # Convert to UTC timestamp
  },
  headers={
    'Authorization': 'escreva a chave da api aqui'
  }
)

# Do something with response data.
json_data = response.json()

df = json_normalize(json_data, 'hours')
df['time'] = pd.to_datetime(df['time'])
df['time'] = df['time'] - timedelta(hours=3)

df['Dia'] = df['time'].dt.date
df['Hora'] = df['time'].dt.time
df['Apenas_Hora'] = df['time'].dt.hour
df['Horario_Ordinal']=((df['time'].dt.hour*3600)+(df['time'].dt.minute*60)+(df['time'].dt.second))

df['Temp_Amb_1_H_Atras']=0.00
df['Temp_Amb_2_H_Atras']=0.00
df['Temp_Amb_3_H_Atras']=0.00


for linha in df.index:
  if df.at[linha,'Apenas_Hora'] < 6 or df.at[linha,'Apenas_Hora'] > 18:
    df.at[linha,'Temp_Amb_1_H_Atras']=0.00
    df.at[linha,'Temp_Amb_2_H_Atras']=0.00
    df.at[linha,'Temp_Amb_3_H_Atras']=0.00
  else:
    df.at[linha,'Temp_Amb_1_H_Atras']=df.at[linha-1,'airTemperature.noaa']
    df.at[linha,'Temp_Amb_2_H_Atras']=df.at[linha-2,'airTemperature.noaa']
    df.at[linha,'Temp_Amb_3_H_Atras']=df.at[linha-3,'airTemperature.noaa']

df['AMBIENT_TEMPERATURE'] = df['airTemperature.noaa']

Tabela_Dinamica_Temp_Amb = df.pivot_table('airTemperature.noaa',['Dia'],'Hora')
#Tabela_Dinamica_Temp_Amb.to_excel('Tab_Din_Temp_Amb.xlsx')

RFR_TempAmb_para_TempInv = pickle.load(open(Modelo_TempAmb_para_TempInversor,'rb'))
Temperaturas_Convertidas = RFR_TempAmb_para_TempInv.predict(df[['AMBIENT_TEMPERATURE','Horario_Ordinal','Temp_Amb_1_H_Atras','Temp_Amb_2_H_Atras','Temp_Amb_3_H_Atras']])
df['Temp_Convertida_Inversor'] = Temperaturas_Convertidas

Tabela_Dinamica = df.pivot_table('Temp_Convertida_Inversor',['Dia'],'Hora')
horas = ['00:00:00','01:00:00','02:00:00','03:00:00','04:00:00','05:00:00','19:00:00','20:00:00','21:00:00','22:00:00','23:00:00']
horas = [dt.datetime.strptime(hora, '%H:%M:%S').time() for hora in horas]
Tabela_Dinamica.drop(horas,axis=1,inplace=True)
Tabela_Dinamica.dropna(axis='rows',inplace=True)
#Tabela_Dinamica.to_excel('Tab_Din_Temp_Convert.xlsx')

horas_desejadas =['06:00:00','07:00:00','08:00:00','09:00:00','10:00:00','11:00:00','12:00:00','13:00:00','14:00:00','15:00:00','16:00:00','17:00:00','18:00:00']
horas_desejadas = [dt.datetime.strptime(hora, '%H:%M:%S').time() for hora in horas_desejadas]

RFR_TempInversor_para_GeracaoEnergia = pickle.load(open(Modelo_TempInversor_para_GeracaoEnergia,'rb'))
Energia_Gerada = RFR_TempInversor_para_GeracaoEnergia.predict(Tabela_Dinamica[horas_desejadas])
Tabela_Dinamica['Energia_Diaria_Gerada']=Energia_Gerada
Tabela_Dinamica.to_excel(Previsao_Energia)