import config from '../config.json';
import styled from 'styled-components';
import { CSSReset } from '../src/components/CSSReset';
import Menu from '../src/components/Menu';

function HomePage() {
    const estiloDaHomePage = {
        //backgroundColor: 'red'
    };

    //console.log(config.playlists);
    return (
        <>
            <CSSReset />
            <div style={estiloDaHomePage}>
                <Menu />
                <Header />
                <TimeLine playlists={config.playlists}>Conteudo</TimeLine>
            </div>
        </>
    );
}

export default HomePage;

const StyledHeader = styled.div`
    img {
        width: 80px;
        height: 80px;
        border-radius: 50%;
    }
    .user-info {
        display: flex;
        align-items: center;
        width: 100%;
        padding: 16px 32px;
    }
`;

function Header() {
    return (
        <StyledHeader>
            <section className="user-info">
                <img src={`https://github.com/${config.github}.png`} />
                <div>
                    <h2>{config.name}</h2>
                    <h2>{config.job}</h2>
                </div>
            </section>
        </StyledHeader>
    );
}

//statment
// Retorno por expressao
// map converte de uma coisa para outra coisa (de objeto para objeto)
// converter da lista de nomes para components react

function TimeLine(props) {
    console.log('dentro do componente', props.playlists);
    const playlistNames = Object.keys(props.playlists);
    return (
        <div>
            {playlistNames.map(function (playlistNames) {
                const videos = props.playlists[playlistNames];
                console.log(playlistNames);
                console.log(videos);
                return (
                    <section>
                        <h2>{playlistNames}</h2>
                        <div>
                            {videos.map((video) => {
                                return (
                                    <a href={video.url}>
                                        <img src={video.thumb} />
                                        <span>{video.title}</span>
                                    </a>
                                );
                            })}
                        </div>
                    </section>
                );
            })}
        </div>
    );
}