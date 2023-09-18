import { useRoutes } from 'react-router-dom';
import { publicRoute } from '~/routes';
import { DefaultLayout } from '~/components/Layouts';
import { Fragment } from 'react';
function App() {
    const routes = useRoutes(
        publicRoute.map((route, index) => {
            let Layout = DefaultLayout;
            if (route.layout) {
                Layout = route.layout;
            } else if (route.layout === null) {
                Layout = Fragment;
            }
            const Page = route.component;
            return {
                path: route.path,
                element: (
                    <div>
                        <Layout>
                            <Page />
                        </Layout>
                    </div>
                ),
            };
        }),
    );
    return <div className="App">{routes}</div>;
}

export default App;
