//Botones hmtl
const botonRadio = document.querySelector('#btn-radio');
const botonTrauma = document.querySelector('#btn-trauma');
const botonDental = document.querySelector('#btn-dental');

//Areglos por especialidad
const radiologia = [
    {hora: '11:00',
    especialista: 'IGNACIO SCHULZ',
    paciente: 'FRANCISCA ROJAS',
    rut: '9878782-1',
    prevision: 'FONASA'},

    {hora: '11:30',
    especialista: 'FEDERICO SUBERCASEAUX',
    paciente: 'PAMELA ESTRADA',
    rut: '15345241-3',
    prevision: 'ISAPRE'},

    {hora: '15:00',
    especialista: 'FERNANDO WURTHZ',
    paciente: 'ARMANDO LUNA',
    rut: '16445345-9',
    prevision: 'ISAPRE'},

    {hora: '15:30',
    especialista: 'ANA MARIA GODOY',
    paciente: 'MANUEL GODOY',
    rut: '17666419-0',
    prevision: 'FONASA'},

    {hora: '16:00',
    especialista: 'PATRICIA SUAZO',
    paciente: 'RAMON ULLOA',
    rut: '14989389-K',
    prevision: 'FONASA'},

];

const traumatologia = [
    {hora: '8:00',
    especialista: 'MARIA PAZ ALTUZARRA',
    paciente: 'PAULA SANCHEZ',
    rut: '15554774-5',
    prevision: 'FONASA'},

    {hora: '10:00',
    especialista: 'RAUL ARAYA',
    paciente: 'ANGÉLICA NAVAS',
    rut: '15345241-3',
    prevision: 'ISAPRE'},

    {hora: '10:30',
    especialista: 'MARIA ARRIAGADA',
    paciente: 'ANA KLAPP',
    rut: '16445345-9',
    prevision: 'ISAPRE'},

    {hora: '11:00',
    especialista: 'ALEJANDRO BADILLA',
    paciente: 'FELIPE MARDONES',
    rut: '17666419-0',
    prevision: 'FONASA'},

    {hora: '11:30',
    especialista: 'CECILIA BUDNIK',
    paciente: 'DIEGO MARRE',
    rut: '14989389-K',
    prevision: 'FONASA'},

    {hora: '12:00',
    especialista: 'ARTURO CAVAGNARO',
    paciente: 'CECILIA MENDEZ',
    rut: '9747535-8',
    prevision: 'FONASA'},

    {hora: '12:30',
    especialista: 'ANDRES KANACRI',
    paciente: 'MARCIAL SUAZO',
    rut: '11254785-5',
    prevision: 'FONASA'},

];

const dental = [
    {hora: '8:30',
    especialista: 'ANDREA ZUÑIGA',
    paciente: 'MARCELA RETAMAL',
    rut: '15554774-5',
    prevision: 'FONASA'},

    {hora: '11:00',
    especialista: 'MARIA PIA ZAÑARTU',
    paciente: 'ANGEL MUÑOZ',
    rut: '15345241-3',
    prevision: 'ISAPRE'},

    {hora: '11:30',
    especialista: 'SCARLETT WITTING',
    paciente: 'MARIO KAST',
    rut: '16445345-9',
    prevision: 'ISAPRE'},

    {hora: '13:00',
    especialista: 'FRANCISCO VON TEUBER',
    paciente: 'KARIN FERNANDEZ',
    rut: '17666419-0',
    prevision: 'FONASA'},

    {hora: '13:30',
    especialista: 'EDUARDO VIÑUELA',
    paciente: 'HUGO SANCHEZ',
    rut: '14989389-K',
    prevision: 'FONASA'},

    {hora: '14:00',
    especialista: 'RAQUEL VILLASECA',
    paciente: 'ANA SEPULVEDA',
    rut: '9747535-8',
    prevision: 'FONASA'},

];

//console.log(radiologia);
//console.log(radiologia[0].hora);
botonRadio.addEventListener('click', () => {
    document.querySelector('#tablaHoras').innerHTML = '';

    for(i=0; i<radiologia.length; i++){
        let rayos = `
            <tr>
                <th scope="row">${radiologia[i].hora}</th>
                <td>${radiologia[i].especialista}</td>
                <td>${radiologia[i].paciente}</td>
                <td>${radiologia[i].rut}</td>
                <td>${radiologia[i].prevision}</td>
            </tr>
        `
        document.querySelector('#horasDe').innerHTML = 'Horas Radiología:'
        document.querySelector('#tablaHoras').innerHTML += rayos;
    };

    document.querySelector('.primeraAtencion').innerHTML = `Primera atención: ${radiologia[0].paciente} - ${radiologia[0].prevision} | Última atención: ${radiologia[radiologia.length - 1].paciente} - ${radiologia[radiologia.length - 1].prevision} `; 
});

botonTrauma.addEventListener('click', () => {
    document.querySelector('#tablaHoras').innerHTML = '';

    for(i=0; i<traumatologia.length; i++){
        let trauma = `
            <tr>
                <th scope="row">${traumatologia[i].hora}</th>
                <td>${traumatologia[i].especialista}</td>
                <td>${traumatologia[i].paciente}</td>
                <td>${traumatologia[i].rut}</td>
                <td>${traumatologia[i].prevision}</td>
            </tr>
        `
        document.querySelector('#horasDe').innerHTML = 'Horas Traumatología:'
        document.querySelector('#tablaHoras').innerHTML += trauma;
    };

    document.querySelector('.primeraAtencion').innerHTML = `Primera atención: ${traumatologia[0].paciente} - ${traumatologia[0].prevision} | Última atención: ${traumatologia[traumatologia.length - 1].paciente} - ${traumatologia[traumatologia.length - 1].prevision} `; 
});

botonDental.addEventListener('click', () => {
    document.querySelector('#tablaHoras').innerHTML = '';
    
    for(i=0; i<dental.length; i++){
        let dent = `
            <tr>
                <th scope="row">${dental[i].hora}</th>
                <td>${dental[i].especialista}</td>
                <td>${dental[i].paciente}</td>
                <td>${dental[i].rut}</td>
                <td>${dental[i].prevision}</td>
            </tr>
        `
        document.querySelector('#horasDe').innerHTML = 'Horas Dental:'
        document.querySelector('#tablaHoras').innerHTML += dent;
    };

    document.querySelector('.primeraAtencion').innerHTML = `Primera atención: ${dental[0].paciente} - ${dental[0].prevision} | Última atención: ${dental[dental.length - 1].paciente} - ${dental[dental.length - 1].prevision} `; 
});

