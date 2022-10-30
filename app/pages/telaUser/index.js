import { React, useState, useEffect } from 'react';
import { View } from 'react-native';
import Header from '../../components/Header';
import Select from '../../components/Select';
import BarChart from '../../components/BarChart';

const SINDICO = 'S';
const MORADOR = 'M'
const ADMINISTRATOR = 'A';

const MOCK_LIST = ['testeA', 'testeB']

const User = () => {
    const [userType, setUserType] = useState(null);

    useEffect(() => {
        // chamada para api, que retorna o tipo de usuario
        //simulaçao chamada api
        const user = "M";
        setUserType(user);
    }, []);

    return (
        <Header title="Minha Conta" >
            <h1>{userType == SINDICO ? 'Sindico' : userType == MORADOR ? 'Morador' : 'Administrador'}</h1>
            <Select list={MOCK_LIST} />
            <BarChart />
        </Header>
    );
}

export default User;