import { Divider } from '@mui/material';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { React, useEffect, useState } from 'react';
import BarChart from '../../components/BarChart';
import Header from '../../components/Header';
import Select from '../../components/Select';

const User = () => {
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



    return (
        <Header title="Minha Conta" >
            {!loading && user ? (
                <>
                    <h1>{user.tpAcesso == 'M' ? 'Morador' : user?.tpAcesso == 'S' ? 'Sindico' : 'Administrador'}</h1>
                    {user.tpAcesso != 'M' && (<>
                        <p>Selecione um tipo de usuario</p>
                        < Select list={user.listSelect} handleChange={handleChange} selected={selected} /></>)}
                    <Divider />
                    {chart && (<BarChart data={chart} />)}
                </>
            ) : <p>Carregando</p>
            }
        </Header >
    );
}

export default User;