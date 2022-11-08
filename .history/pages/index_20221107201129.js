function HomePage() {
    const menssagem = 'Bem vindo ao AluraTube!';
    const estiloDaHomePage = { backgroundColor: 'red' };
    return <div style={estiloDaHomePage}>{menssagem}</div>;
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
