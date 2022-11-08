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
    return <div>Header</div>;
}

function TimeLine() {
    return <div>Timeline</div>;
}
