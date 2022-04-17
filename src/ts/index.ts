async function main() {
    // either require or async imports seem to work
    const { main } = require('../js');
    const { getHeapStatistics } = await import('../js');
    console.log(main());
    console.log(getHeapStatistics());

    const { render } = await import('../js/react');
    console.log(render());

    const { render: renderTypescriptReact } = await import('./react');
    console.log(renderTypescriptReact());
}

main();
