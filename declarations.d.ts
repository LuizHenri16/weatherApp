// Declaração de tipos para arquivos SVG
// Isso é necessário para que o TypeScript reconheça arquivos SVG como componentes React
// Com iss, ao importar um arquivo SVG, não será apontado erro no caminho o importo

declare module "*.svg" {
    import React from 'react';
    import { SvgProps } from "react-native-svg";
    const content: React.FC<SvgProps>;
    export default content;
}