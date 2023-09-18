import Header from '~/components/layout/components/Header';
import Sidebar from './Sidebar';

function DefaultLayout() {
    return (
        <div>
            <Header></Header>
            <div className="container">
                <Sidebar></Sidebar>
                <div className="content"></div>
            </div>
        </div>
    );
}

export default DefaultLayout;
