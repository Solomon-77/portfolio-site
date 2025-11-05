import { useTitle } from '../utils/useTitle'

const PageNotFound = () => {
    useTitle('Cyrill: 404')

    return (
        <div className="h-full grid place-items-center font-medium text-center p-2">
            {`404 — Page Not Found :(`}
        </div>
    )
}

export default PageNotFound