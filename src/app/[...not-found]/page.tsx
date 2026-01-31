import LayoutV1 from '@/components/layouts/LayoutV1';
import Error404Content from '../../components/error404/Error404Content';

const NotFoundPage = () => {
    return (
        <>
            <LayoutV1>
                <Error404Content />
            </LayoutV1>
        </>
    );
};

export default NotFoundPage;