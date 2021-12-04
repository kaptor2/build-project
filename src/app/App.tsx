import Styled from './App.styles';

export const App: React.FC = () => {
    return (
        <>
            <Styled.Title>{process.env.STAND}</Styled.Title>
        </>
    );
};
