import Header from './Header';
function About(props) {
return (
    <div>
        <Header group="ИКБО-02-20" author="Голышев Антон Олегович"/>
        <h1>Для чего нужен данный сайт?</h1>
        <p>Данный сайт нужен для {props.number} практики по РКСП, а также является примером работы с routes и props в React</p>
    </div>
)
}
export default About;