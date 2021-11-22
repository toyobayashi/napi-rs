window.BENCHMARK_DATA = {
  lastUpdate: 1637591982268,
  repoUrl: 'https://github.com/napi-rs/napi-rs',
  entries: {
    Benchmark: [
      {
        commit: {
          author: {
            email: 'samholmes1337@gmail.com',
            name: 'Sam Holmes',
            username: 'sam3d',
          },
          committer: {
            email: 'noreply@github.com',
            name: 'GitHub',
            username: 'web-flow',
          },
          distinct: true,
          id: 'b9f43455f07fdc71006865e2b1a865e6347e5eda',
          message: 'fix(napi-build): cargo:rerun-if commands (#871)',
          timestamp: '2021-11-22T22:35:05+08:00',
          tree_id: 'fe7ad548dfacd7e337b0dec46c6da28d72c301f6',
          url: 'https://github.com/napi-rs/napi-rs/commit/b9f43455f07fdc71006865e2b1a865e6347e5eda',
        },
        date: 1637591980388,
        tool: 'benchmarkjs',
        benches: [
          {
            name: 'noop#napi-rs',
            value: 45285327,
            range: '±1.23%',
            unit: 'ops/sec',
            extra: '91 samples',
          },
          {
            name: 'noop#JavaScript',
            value: 669924130,
            range: '±0.61%',
            unit: 'ops/sec',
            extra: '91 samples',
          },
          {
            name: 'Plus number#napi-rs',
            value: 14963950,
            range: '±1.47%',
            unit: 'ops/sec',
            extra: '85 samples',
          },
          {
            name: 'Plus number#JavaScript',
            value: 667696173,
            range: '±0.53%',
            unit: 'ops/sec',
            extra: '91 samples',
          },
          {
            name: 'Create buffer#napi-rs',
            value: 317520,
            range: '±9.97%',
            unit: 'ops/sec',
            extra: '61 samples',
          },
          {
            name: 'Create buffer#JavaScript',
            value: 1497798,
            range: '±3.77%',
            unit: 'ops/sec',
            extra: '79 samples',
          },
          {
            name: 'createArray#createArrayJson',
            value: 35453,
            range: '±0.43%',
            unit: 'ops/sec',
            extra: '90 samples',
          },
          {
            name: 'createArray#create array for loop',
            value: 6004,
            range: '±0.52%',
            unit: 'ops/sec',
            extra: '92 samples',
          },
          {
            name: 'createArray#create array with serde trait',
            value: 6154,
            range: '±0.77%',
            unit: 'ops/sec',
            extra: '90 samples',
          },
          {
            name: 'getArrayFromJs#get array from json string',
            value: 14085,
            range: '±0.95%',
            unit: 'ops/sec',
            extra: '89 samples',
          },
          {
            name: 'getArrayFromJs#get array from serde',
            value: 8890,
            range: '±0.54%',
            unit: 'ops/sec',
            extra: '88 samples',
          },
          {
            name: 'getArrayFromJs#get array with for loop',
            value: 11722,
            range: '±0.48%',
            unit: 'ops/sec',
            extra: '89 samples',
          },
          {
            name: 'Get Set property#Get Set from native#u32',
            value: 359045,
            range: '±5.2%',
            unit: 'ops/sec',
            extra: '76 samples',
          },
          {
            name: 'Get Set property#Get Set from JavaScript#u32',
            value: 322447,
            range: '±4.72%',
            unit: 'ops/sec',
            extra: '76 samples',
          },
          {
            name: 'Get Set property#Get Set from native#string',
            value: 334560,
            range: '±4.68%',
            unit: 'ops/sec',
            extra: '76 samples',
          },
          {
            name: 'Get Set property#Get Set from JavaScript#string',
            value: 300027,
            range: '±4.75%',
            unit: 'ops/sec',
            extra: '77 samples',
          },
          {
            name: 'Async task#spawn task',
            value: 40952,
            range: '±2.15%',
            unit: 'ops/sec',
            extra: '79 samples',
          },
          {
            name: 'Async task#ThreadSafeFunction',
            value: 436,
            range: '±3.78%',
            unit: 'ops/sec',
            extra: '52 samples',
          },
          {
            name: 'Async task#Tokio future to Promise',
            value: 25740,
            range: '±3.03%',
            unit: 'ops/sec',
            extra: '75 samples',
          },
          {
            name: 'Query#query * 100',
            value: 1882,
            range: '±1.96%',
            unit: 'ops/sec',
            extra: '81 samples',
          },
          {
            name: 'Query#query * 1',
            value: 19512,
            range: '±4.42%',
            unit: 'ops/sec',
            extra: '70 samples',
          },
        ],
      },
    ],
  },
}