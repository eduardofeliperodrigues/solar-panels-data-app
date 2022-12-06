import MenuIcon from '@mui/icons-material/Menu';
import AppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import * as S from "./styles";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

const Header = ({ title, navigation, goback, children }) => {
    return (
        <>
            <S.Header sx={{ flexGrow: 1 }}>
                <AppBar>
                    <Toolbar>
                        {goback && (
                            <IconButton
                                size="large"
                                edge="start"
                                color="inherit"
                                aria-label="menu"
                                sx={{ mr: 2 }}
                                onClick={() => navigation.goBack()}
                            >
                                <ArrowBackIosIcon />
                            </IconButton>
                        )}


                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            Sunner | {title}
                        </Typography>

                    </Toolbar>
                </AppBar>
            </S.Header>
            <S.Layout>{children}</S.Layout>
        </>
    );
};

export default Header;
