export const MOCK_CHART_WEATHER = [{
    labels: ['Jan', 'Feb', 'Mar', 'Apr'],
    datasets: [{ label: 'Chuva', data: [50, 60, 70, 180] }, { label: 'Sol', data: [100, 200, 300, 400] }, { label: 'teste', data: [1, 22, 55] }]
}, {
    labels: ['Jan', 'Feb', 'Mar', 'Apr'],
    datasets: [{ label: 'Chuva', data: [10, 20, 30, 40] }, { label: 'Sol', data: [50, 60, 70, 80] }, { label: 'teste', data: [12, 22, 55] }]
}
]

export const MOCK_TYPE_USER = ['Morador', 'Administrador', 'Sindico']

export const MOCK_USER = {
    type: 'Morador',// type [M]orador, [A]dministrador ou [S]indico
    name: 'Leonardo',
    charts: MOCK_CHART_WEATHER
}

export const MOCK_CHART_A = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr'],
    datasets: [{ label: 'Chuva', data: [50, 60, 70, 180] }, { label: 'Sol', data: [100, 200, 300, 400] }, { label: 'teste', data: [1, 22, 55] }]
}

export const MOCK_CHART_S = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr'],
    datasets: [{ label: 'Chuva', data: [10, 20, 30, 40] }, { label: 'Sol', data: [50, 60, 70, 80] }, { label: 'teste', data: [12, 22, 55] }]
}

export const MOCK_CHART_M = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr'],
    datasets: [{ label: 'Chuva', data: [10, 20, 30, 40] }, { label: 'Sol', data: [50, 60, 70, 80] }, { label: 'teste', data: [12, 22, 55] }]
}


