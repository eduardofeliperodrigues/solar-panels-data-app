from flask import Flask, request
from flask_restful import Api
import pandas as pd
from flask_cors import CORS
import os
import datetime as dt

app = Flask(__name__)
CORS(app)
api = Api(app)

script_dir = os.path.dirname(__file__)
rel_path = "ML-Models/"
ML_Models_Path = os.path.join(script_dir, rel_path)
Previsao_Energia = os.path.join(ML_Models_Path, "Previsao_Energia.xlsx")

@app.route('/previsao_energia/', methods=['POST', 'GET'])
def previsao_energia():
    input_inversores = request.get_json()
    df = pd.DataFrame.from_dict(input_inversores)
    df_previsao = pd.read_excel(Previsao_Energia)
    df_previsao_output_final = pd.DataFrame()

    for linha in df.index:
        df_previsao_output=df_previsao.copy()
        df_previsao_output['Inversor']=df.at[linha,'inversores']
        df_previsao_output_final = df_previsao_output_final.append(df_previsao_output, ignore_index=True)

    df_previsao_output_final['Dia'] = df_previsao_output_final['Dia'].dt.strftime('%Y-%m-%d')+'  00:00:00'
    output_json = df_previsao_output_final.to_json()
    return output_json

@app.route('/previsao_tempo/',methods=['POST', 'GET'])
def previsao_tempo():
    exec(open("./Get_Temp_Forecast.py").read())
    df_previsao = pd.read_excel(Previsao_Energia)
    output_json = df_previsao.to_json()
    return output_json

if __name__ == '__main__':
    app.run( debug=True, host='0.0.0.0', port=int(os.environ.get('PORT', 8080)))