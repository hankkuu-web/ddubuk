import { Helmet } from 'react-helmet-async';

function PageTitle({ title }) {
    return (
        <Helmet>
            <title>{title} | TTO-VIEW</title>
        </Helmet>
    );
}
export default PageTitle;