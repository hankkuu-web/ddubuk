import { Helmet } from 'react-helmet-async';

function PageTitle({ title }) {
    return (
        <Helmet>
            <title>{title} | DDUBUK-DDUBUK </title>
        </Helmet>
    );
}
export default PageTitle;