import Header from '~/components/Layouts/components/Header';
import Sidebar from './Sidebar';
import style from './DefaultLayout.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(style);
function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header></Header>
            <div className={cx('container')}>
                <Sidebar></Sidebar>
                <div className={cx('content')}>{children}</div>
            </div>
        </div>
    );
}

export default DefaultLayout;
