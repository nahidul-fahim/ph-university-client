import { Layout } from 'antd';
import { FC } from 'react';
import Sidebar from './Sidebar';

const { Header, Content } = Layout;



const MainLayout: FC = () => {
    return (
        <Layout style={{ height: '100vh' }}>
            {/* sidebar */}
            <Sidebar />
            {/* layout */}
            <Layout>
                <Header style={{ padding: 0 }} />
                <Content style={{ margin: '24px 16px 0' }}>
                    <div
                        style={{
                            padding: 24,
                            minHeight: 360,
                        }}
                    >
                        <h1>The sidebar content goes here</h1>
                    </div>
                </Content>
            </Layout>
        </Layout>
    );
};

export default MainLayout;