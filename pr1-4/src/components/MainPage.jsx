import Header from './Header';
function MainPage(props) {
    return (
        <div>
        <Header group="ИКБО-02-20" author="Голышев Антон Олегович"/>
        <h1>Вы находитесь на главной странице сайта</h1>
        <p>Добрый {props.time}!<br/> Сегодня {props.date}
        </p>
        </div>
        );
}
export default MainPage;