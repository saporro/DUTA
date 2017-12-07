import React from 'react';
import {Page, ContentBlock, Navbar, List, ListItem} from 'framework7-react';

export const Agi = () => {
    return (
        <Page>
            <Navbar title="Agility" backLink="Back" sliding />
             <ContentBlock>
                <List mediaList>
                    <ListItem
                        link="/yurnero/"
                        media="<img src='img/yurnero.png' widht='80' height='80'>"
                        title="Yurnero"
                        text="Yurnero the Juggernaut"
                    ></ListItem>
                    <ListItem
                        link="/kardel/"
                        media="<img src='img/Kardel.png' widht='80' height='80'>"
                        title="Kardel"
                        text="Kardel Sharpeye The Draweven Sniper"
                    ></ListItem>
                    <ListItem
                        link="/morphling/"
                        media="<img src='img/Morphling.png' widht='80' height='80'>"
                        title="Morphling"
                        text="The Morphling"
                    ></ListItem>
                    <ListItem
                        link="/mirana/"
                        media="<img src='img/mirana.png' widht='80' height='80'>"
                        title="Mirana Nightshade"
                        text="Mirana The Pristess of the Moon"
                    ></ListItem>
                    <ListItem
                        link="/luna/"
                        media="<img src='img/Luna.png' widht='80' height='80'>"
                        title="Luna"
                        text="Luna Moonfang The Moon Rider"
                    ></ListItem>
                    <ListItem
                        link="/naga/"
                        media="<img src='img/Naga.png' widht='80' height='80'>"
                        title="Slithice"
                        text="Slithice The Naga Siren"
                    ></ListItem>
                    <ListItem
                        link="/lancer/"
                        media="<img src='img/Lancer.png' widht='80' height='80'>"
                        title="Azwraith"
                        text="Azwraith the Phantom Lancer"
                    ></ListItem>
                    <ListItem
                        link="/gondar/"
                        media="<img src='img/Gondar.png' widht='80' height='80'>"
                        title="Gondar"
                        text="Gondar The Bounty Hunter"
                    ></ListItem>
                    <ListItem
                        link="/lanaya/"
                        media="<img src='img/Lanaya.png' widht='80' height='80'>"
                        title="Lanaya"
                        text="Lanaya the Templar Assassin"
                    ></ListItem>
                    <ListItem
                        link="/traxex/"
                        media="<img src='img/Traxex.png' widht='80' height='80'>"
                        title="Traxex"
                        text="Traxex the Drow Ranger"
                    ></ListItem>
                </List>
            </ContentBlock>
        </Page>
    );
};
