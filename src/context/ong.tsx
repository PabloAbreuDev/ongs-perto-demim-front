import { createContext, useState } from "react";
import { IOng } from "../interfaces/ong";

export type OngsContextState = {
    ongs: IOng[];
    loadOngs: (ongs: IOng[]) => void;
};

const contextDefaultValues: OngsContextState = {
    ongs: [],
    loadOngs: () => { },
};

export const OngContext = createContext<OngsContextState>(contextDefaultValues);

const OngsProvider = ({ children }: { children: JSX.Element }) => {
    const [ongs, setOngs] = useState<IOng[]>(contextDefaultValues.ongs);

    const loadOngs = (ongs: IOng[]) => setOngs(ongs);

    return (
        <OngContext.Provider value={{ ongs, loadOngs }}>
            {children}
        </OngContext.Provider>
    );
};

export default OngsProvider;
