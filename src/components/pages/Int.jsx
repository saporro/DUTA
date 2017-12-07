import React from 'react';
import {Page, ContentBlock, Navbar, List, ListItem} from 'framework7-react';

export const Int = () => {
    return (
        <Page>
            <Navbar title="Intelligence" backLink="Back" sliding />
            <ContentBlock>
                <List mediaList>
                    <ListItem
                        link="/invoker/"
                        media="<img src='img/invokerr.png' widht='80' height='80'>"
                        title="Invoker"
                        text="Kael"
                    ></ListItem>
                    <ListItem
                        link="/nortrom/"
                        media="<img src='img/Nortrom.png' widht='80' height='80'>"
                        title="Nortrom"
                        text="Nortrom The Silencer"
                    ></ListItem>
                    <ListItem
                        link="/alleria/"
                        media="<img src='img/Alleria.png' widht='80' height='80'>"
                        title="Alleria"
                        text="Alleria The Windrunner"
                    ></ListItem>
                    <ListItem
                        link="/zeus/"
                        media="<img src='img/Zeus.png' widht='80' height='80'>"
                        title="Zeus"
                        text="Zeus The Lord Of The Olympia"
                    ></ListItem>
                    <ListItem
                        link="/puck/"
                        media="<img src='img/Puck.png' widht='80' height='80'>"
                        title="Puck"
                        text="Puck The Faery Dragon"
                    ></ListItem>
                    <ListItem
                        link="/rubick/"
                        media="<img src='img/Rubick.png' widht='80' height='80'>"
                        title="Rubick"
                        text="Rubick The Grand Magus"
                    ></ListItem> 
                    <ListItem
                        link="/raijin/"
                        media="<img src='img/Raijin.png' widht='80' height='80'>"
                        title="Raijin"
                        text="Raijin Thunderkeg The Storm Spirit"
                    ></ListItem>
                    <ListItem
                        link="/akasha/"
                        media="<img src='img/Akasha.png' widht='80' height='80'>"
                        title="Akasha"
                        text="Akasha The Queen of Pain"
                    ></ListItem>
                    <ListItem
                        link="/leshrac/"
                        media="<img src='img/Leshrac.png' widht='80' height='80'>"
                        title="Leshrac"
                        text="Leshrac The Tormented Soul"
                    ></ListItem>
                    <ListItem
                        link="/batrider/"
                        media="<img src='img/Batrider.png' widht='80' height='80'>"
                        title="Jin'Zakk"
                        text="Jin'Zakk The Batrider"
                    ></ListItem>
                </List>
            </ContentBlock>
        </Page>
    );
};
