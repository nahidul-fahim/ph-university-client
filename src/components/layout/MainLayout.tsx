import { Button, Layout } from 'antd';
import { FC } from 'react';
import Sidebar from './Sidebar';
import { useAppDispatch } from '../../redux/hooks';
import { logout } from '../../redux/features/auth/authSlice';
import { Outlet } from 'react-router-dom';

const { Header, Content } = Layout;



const MainLayout: FC = () => {

    const dispatch = useAppDispatch();

    // logout from redux
    const handleLogout = () => {
        dispatch(logout())
    }


    return (
        <Layout style={{ height: '100vh' }}>

            {/* sidebar */}
            <Sidebar />

            {/* layout */}
            <Layout>
                <Header style={{ padding: 0 }}>

                    {/* logout button */}
                    <Button onClick={handleLogout}>
                        Logout
                    </Button>
                </Header>


                <Content style={{ margin: '24px 16px 0' }}>
                    <div
                        style={{
                            padding: 24,
                            minHeight: 360,
                        }}
                    >
                        {/* <h1>The sidebar content goes here</h1> */}
                        <Outlet />
                    </div>
                </Content>
            </Layout>
        </Layout>
    );
};

export default MainLayout;