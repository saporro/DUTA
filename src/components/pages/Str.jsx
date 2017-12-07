import React from 'react';
import {Page, ContentBlock, Navbar, List, ListItem} from 'framework7-react';

export const Str = () => {
    return (
        <Page>
            <Navbar title="Strength" backLink="Back" sliding />
            <ContentBlock>
                <List mediaList>
                    <ListItem
                        link="/axe/"
                        media="<img src='img/Axe.png' widht='80' height='80'>"
                        title="Axe"
                        text="Axe The Mogul Khan"
                    ></ListItem>
                    <ListItem
                        link="/crixalis/"
                        media="<img src='img/Crixalis.png' widht='80' height='80'>"
                        title="Crixalis"
                        text="Crixalis The Sand King"
                    ></ListItem>
                    <ListItem
                        link="/azgalor/"
                        media="<img src='img/Azgalor.png' widht='80' height='80'>"
                        title="Azgalor"
                        text="Azgalor The Pit Lord"
                    ></ListItem>
                    <ListItem
                        link="/dirge/"
                        media="<img src='img/Dirge.png' widht='80' height='80'>"
                        title="Dirge"
                        text="Dirge The Undying"
                    ></ListItem>
                    <ListItem
                        link="/magnus/"
                        media="<img src='img/Magnus.png' widht='80' height='80'>"
                        title="Magnus"
                        text="Magnus The Magnataur"
                    ></ListItem>
                    <ListItem
                        link="/kunka/"
                        media="<img src='img/Kunka.png' widht='80' height='80'>"
                        title="Kunka"
                        text="Kunka The Admiral Proudmoore"
                    ></ListItem>
                    <ListItem
                        link="/tresdin/"
                        media="<img src='img/Tresdin.png' widht='80' height='80'>"
                        title="Tresdin"
                        text="Tresdin The Legion Commander"
                    ></ListItem>
                    <ListItem
                        link="/rexxar/"
                        media="<img src='img/Rexxar.png' widht='80' height='80'>"
                        title="Rexxar"
                        text="Rexxar The Beast Master"
                    ></ListItem>
                    <ListItem
                        link="/omniknight/"
                        media="<img src='img/Omniknight.png' widht='80' height='80'>"
                        title="Omniknight"
                        text="Purist Thunderwrath The Omniknight"
                    ></ListItem>                    
                    <ListItem
                        link="/sven/"
                        media="<img src='img/Sven.png' widht='80' height='80'>"
                        title="Sven"
                        text="Sven The Rogue Knight"
                    ></ListItem>
                </List>
            </ContentBlock>
        </Page>
    );
};
