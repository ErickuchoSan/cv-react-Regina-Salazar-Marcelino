import { useVersion } from './hooks/useVersion';
import { RHVersion } from './components/RHVersion';
import { InfantilVersion } from './components/Infantil/InfantilVersion';
import { VersionSwitcher } from './components/UI/VersionSwitcher';

function App() {
    const { version, toggleVersion } = useVersion();

    return (
        <>
            {version === 'rh' ? <RHVersion /> : <InfantilVersion />}
            <VersionSwitcher version={version} onToggle={toggleVersion} />
        </>
    );
}

export default App;
