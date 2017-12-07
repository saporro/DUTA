import React from 'react';
import {Page, ContentBlock, ContentBlockTitle, Navbar, List, ListItem} from 'framework7-react';

export const Menu = () => {
    return (
        <Page>
            <Navbar title="Welcome to Dota Guide" sliding />
            <ContentBlockTitle>Hero Types</ContentBlockTitle>
            <ContentBlock>
                    <p><img role="presentation" src="img/dota.png" width="100%"/></p>
                <List mediaList>
                    <ListItem
                        link="/str/"
                        media="<img src='img/str.png' widht='50' height='50'>"
                        title="Strength"
                        text="Heroes with dense hint points. Mostly fight in the front lines."
                    ></ListItem>
                    <ListItem
                        link="/agi/"
                        media="<img src='img/agi.png' widht='50' height='50'>"
                        title="Agility"
                        text="Heroes who uses their speed to kill its opponents."
                    ></ListItem>
                    <ListItem
                        link="/int/"
                        media="<img src='img/int.png' widht='50' height='50'>"
                        title="Intelligence"
                        text="Heroes who uses magic. They are good with strategy."
                    ></ListItem>
                </List>
            </ContentBlock>
        </Page>
    );
};
