import React, {PropTypes} from 'react';

import {
	Framework7App, Statusbar, View, Pages, Page, ContentBlock, ContentBlockTitle, 
	Views, Button
} from 'framework7-react';

import {routes} from '../routes';

const MainViews = (props, context) => {
	return (
		<Views>
			<View id="main-view" layout="dark" navbarThrough dynamicNavbar={true} main url="/">

				{/* Pages */}
				<Pages>
					<Page>
						<ContentBlockTitle>Dota Guide</ContentBlockTitle>
						<ContentBlock>
							<p><img role="presentation" src="img/qqq.png" width="100%"/></p>
						</ContentBlock>

						<ContentBlock inner>
							<p>Do you wanna start Dota guide?</p>
						</ContentBlock>
						<ContentBlock>
							<Button raised color="white" bg="blue" href="/menu/">HELL YEAH!</Button>
						</ContentBlock>
					</Page>
				</Pages>
			</View>
		</Views>
	);
};

MainViews.contextTypes = {
	framework7AppContext: PropTypes.object
};

export const App = () => (	
	//Change themeType to "material" to use the Material theme
	<Framework7App themeType="material" routes={routes}>		
		<Statusbar />		
		<MainViews />
	</Framework7App>  
);
