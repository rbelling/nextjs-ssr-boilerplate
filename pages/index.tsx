import * as React from 'react';

const getName = (): string => "42";

const Index = (): any => <div>
    <p>Hello {getName()}!!!</p>
</div>;
export default Index;
