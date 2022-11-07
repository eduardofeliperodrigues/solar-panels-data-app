import MenuIcon from '@mui/icons-material/Menu';
import AppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import * as S from "./styles";

const Header = ({ title, navigation, isLoggedIn = true, children }) => {
    return (
        <>
            <S.Header sx={{ flexGrow: 1 }}>
                <AppBar>
                    <Toolbar>

                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                            onClick={() => console.log('42')}
                        >
                            <MenuIcon />
                        </IconButton>

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
