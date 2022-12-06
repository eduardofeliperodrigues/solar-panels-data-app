import { Divider } from '@mui/material';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { React, useEffect, useState } from 'react';
import BarChart from '../../components/BarChart';
import Header from '../../components/Header';
import Select from '../../components/Select';
import { Button } from 'react-native';

const User = ({ navigation }) => {
    const [selected, setSelected] = useState('')
    const [user, setUser] = useState()
    const [loading, setLoading] = useState(true)
    const [chart, setChart] = useState()

    const Buscar = async (chave) => {
        const valor = await AsyncStorage.getItem(chave)
        setUser(JSON.parse(valor));
    }

    useEffect(() => {
        Buscar(`@usuario`);
    }, []);

    useEffect(() => {
        if (!user) return
        if (user.tpAcesso == 'M') setChart(user.listUser[0])
        setLoading(false)
    }, [user])

    const handleChange = (event) => {
        setSelected(event.target.value)
    }

    useEffect(() => {
        if (!user || !selected) return;

        const selectedUser = user.listUser.find((element) => element.label == selected)
        setChart(selectedUser)
    }, [selected, user])

    const onPress = () => {
        navigation.navigate('ApiYohan')
    }

    return (
        <Header title="Minha Conta" goback={true} navigation={navigation}>
            {!loading && user ? (
                <>
                    <h1>{user.tpAcesso == 'M' ? 'Morador' : user?.tpAcesso == 'S' ? 'Sindico' : 'Administrador'}</h1>
                    {user.tpAcesso != 'M' && (<>
                        <p>Selecione um tipo de usuario</p>
                        < Select list={user.listSelect} handleChange={handleChange} selected={selected} /></>)}
                    <Divider />
                    {chart && (<BarChart data={chart} />)}
                    <Button
                        onPress={onPress}
                        title="Ver Economia"
                        color="#7B61FF"
                        accessibilityLabel="Learn more about this purple button"
                    />
                </>
            ) : <p>Carregando</p>
            }
        </Header >
    );
}

export default User;