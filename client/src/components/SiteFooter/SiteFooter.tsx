import React from 'react'
import Grid from '@material-ui/core/Grid'
import './SiteFooter.sass'
import {UIContainer} from "../UIContainer/UIContainer";
import {MainLogo} from "../MainLogo/MainLogo";
import {MainMenu} from "../MainMenu/MainMenu";

function SiteFooter() {
    return (
        <footer className="site-footer">
            <UIContainer>
                <Grid container
                      alignItems='center'>
                    <Grid item
                          xs={12}
                          sm={6}
                          md={2}>
                        <MainLogo/>
                    </Grid>

                    <Grid item
                          xs={false}
                          sm={6}
                          md={8}>
                        <MainMenu/>
                    </Grid>
                </Grid>
            </UIContainer>
        </footer>
    )
}

export {SiteFooter}
