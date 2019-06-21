import * as React from 'react';

const getName = (): string => "42";

const Index = (): any => <div>
    <style jsx>{`
      p {
        color: red;
      }
    `}</style>
    <p>Hello {getName()}!!!</p>
</div>;
export default Index;
