import config from '../config.json';

function HomePage() {
    const estiloDaHomePage = { backgroundColor: 'red' };
    return (
        <div style={estiloDaHomePage}>
            <Menu />
            <Header />
            <TimeLine />
        </div>
    );
}

export default HomePage;

function Menu() {
    return <div>Menu</div>;
}

function Header() {
    return (
        <div>
            <img src="banner" />
            <img src={https://avatars.githubusercontent.com/u/81974696?v=4} />
            {config.name}
            {config.job}
        </div>
    );
}

function TimeLine() {
    return <div>Timeline</div>;
}
