window.BENCHMARK_DATA = {
  lastUpdate: 1635738831737,
  repoUrl: 'https://github.com/napi-rs/napi-rs',
  entries: {
    Benchmark: [
      {
        commit: {
          author: {
            email: 'lynweklm@gmail.com',
            name: 'LongYinan',
            username: 'Brooooooklyn',
          },
          committer: {
            email: 'lynweklm@gmail.com',
            name: 'LongYinan',
            username: 'Brooooooklyn',
          },
          distinct: true,
          id: '6a99e1abd4dd9b18f42d29a53b5f1f66c2524b66',
          message: 'ci: fix cmake and clang++-13 in debian.Dockerfile',
          timestamp: '2021-11-01T11:49:12+08:00',
          tree_id: 'f51bdc280f16b6789c064380e4d7612688b56a90',
          url: 'https://github.com/napi-rs/napi-rs/commit/6a99e1abd4dd9b18f42d29a53b5f1f66c2524b66',
        },
        date: 1635738830454,
        tool: 'benchmarkjs',
        benches: [
          {
            name: 'noop#napi-rs',
            value: 47843280,
            range: '±1.23%',
            unit: 'ops/sec',
            extra: '85 samples',
          },
          {
            name: 'noop#JavaScript',
            value: 675602521,
            range: '±1.39%',
            unit: 'ops/sec',
            extra: '82 samples',
          },
          {
            name: 'Plus number#napi-rs',
            value: 16165418,
            range: '±1.11%',
            unit: 'ops/sec',
            extra: '89 samples',
          },
          {
            name: 'Plus number#JavaScript',
            value: 724923047,
            range: '±0.88%',
            unit: 'ops/sec',
            extra: '89 samples',
          },
          {
            name: 'Create buffer#napi-rs',
            value: 332217,
            range: '±9.36%',
            unit: 'ops/sec',
            extra: '72 samples',
          },
          {
            name: 'Create buffer#JavaScript',
            value: 2165992,
            range: '±6.03%',
            unit: 'ops/sec',
            extra: '79 samples',
          },
          {
            name: 'createArray#createArrayJson',
            value: 31439,
            range: '±1%',
            unit: 'ops/sec',
            extra: '87 samples',
          },
          {
            name: 'createArray#create array for loop',
            value: 6808,
            range: '±1.27%',
            unit: 'ops/sec',
            extra: '88 samples',
          },
          {
            name: 'createArray#create array with serde trait',
            value: 6460,
            range: '±1.32%',
            unit: 'ops/sec',
            extra: '84 samples',
          },
          {
            name: 'getArrayFromJs#get array from json string',
            value: 14612,
            range: '±1.62%',
            unit: 'ops/sec',
            extra: '85 samples',
          },
          {
            name: 'getArrayFromJs#get array from serde',
            value: 8539,
            range: '±1.38%',
            unit: 'ops/sec',
            extra: '85 samples',
          },
          {
            name: 'getArrayFromJs#get array with for loop',
            value: 10000,
            range: '±1.42%',
            unit: 'ops/sec',
            extra: '86 samples',
          },
          {
            name: 'Get Set property#Get Set from native#u32',
            value: 333495,
            range: '±5.2%',
            unit: 'ops/sec',
            extra: '74 samples',
          },
          {
            name: 'Get Set property#Get Set from JavaScript#u32',
            value: 301173,
            range: '±5.41%',
            unit: 'ops/sec',
            extra: '75 samples',
          },
          {
            name: 'Get Set property#Get Set from native#string',
            value: 310542,
            range: '±4.89%',
            unit: 'ops/sec',
            extra: '76 samples',
          },
          {
            name: 'Get Set property#Get Set from JavaScript#string',
            value: 302620,
            range: '±4.98%',
            unit: 'ops/sec',
            extra: '75 samples',
          },
          {
            name: 'Async task#spawn task',
            value: 44779,
            range: '±2.05%',
            unit: 'ops/sec',
            extra: '80 samples',
          },
          {
            name: 'Async task#ThreadSafeFunction',
            value: 372,
            range: '±3.91%',
            unit: 'ops/sec',
            extra: '35 samples',
          },
          {
            name: 'Async task#Tokio future to Promise',
            value: 26134,
            range: '±3.29%',
            unit: 'ops/sec',
            extra: '75 samples',
          },
          {
            name: 'Query#query * 100',
            value: 1797,
            range: '±2.84%',
            unit: 'ops/sec',
            extra: '78 samples',
          },
          {
            name: 'Query#query * 1',
            value: 20228,
            range: '±3.87%',
            unit: 'ops/sec',
            extra: '73 samples',
          },
        ],
      },
    ],
  },
}