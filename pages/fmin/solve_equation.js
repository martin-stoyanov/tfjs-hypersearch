import { Box } from 'grommet';
import hp, { fmin, optimizers } from 'hyperparameters';
import Doc from '../../components/Doc';
import LineChart from '../../components/LineChart';

export default class SolveEquationPage extends React.Component {
  state = {
    data: [],
    argmin: undefined,
  };
  async componentDidMount() {
    const space = hp.uniform('x', -5, 5);
    const opt = x => ((x ** 2) - (x + 1));

    const trials = await fmin(opt, space, optimizers.rand.suggest, 100);
    // eslint-disable-next-line react/no-did-mount-set-state
    this.setState({
      argmin: trials.argmin,
      data: trials.trials.map(trial => ({ x: trial.args, y: trial.result.loss }))
        .sort((a, b) => b.x - a.x)
        .reverse(),
    });
  }
  render() {
    const { data, argmin } = this.state;
    console.log(argmin);
    return (
      <Box>
        <Doc
          name='loguniform'
          example={(
            <Box basis='medium'>
              <LineChart
                size='large'
                dataset={data.map(row => row.y)}
                labels={data.map(row => row.x)}
              />
            </Box>)}
          desc={{
            description: 'Returns a value exp(uniform(low, high)) so the logarithm of the return value is uniformly distributed.',
            properties: [{
              name: 'label',
              description: 'a name for the expression',
            },
              {
                name: 'low',
                description: 'The minimum possible value of the number',
                required: false,
              },
              {
                name: 'high',
                description: 'The maximum possible value of the number',
                required: false,
              }],
          }}
        />
      </Box>
    );
  }
}