import Example from '../../components/Example';
import LineChart from '../../components/LineChart';
import TrialsTable from '../../components/TrialsTable';

export default class SolveEquationPage extends React.Component {
  state = {
    trials: [],
    data: [],
    argmin: undefined,
  };

  onData = (trials) => {
    this.setState({
      trials: trials.trials,
      argmin: trials.argmin,
      data: trials.trials.map(trial => (
        { x: trial.args.x.toFixed(2), y: trial.result.loss.toFixed(2) }
      ))
        .sort((a, b) => b.x - a.x)
        .reverse(),
    });
  };

  render() {
    const { data, argmin, trials } = this.state;
    return (
      <Example
        name='x ** 2 - x + 1'
        onData={this.onData}
        example={(
          <LineChart
            size='large'
            dataset={data.map(row => row.y)}
            labels={data.map(row => row.x)}
            style={{
              label: argmin ? argmin.x.toFixed(2) : '',
              pointRadius: 0,
              borderWidth: 5,
            }}
          />)}
        description='Find minimum value of equation x ** 2 - x + 1.'
        code={
`const space = {
x: hp.uniform('x', -5, 5),
};
const opt = ({ x }) => (Math.pow(x, 2) - (x + 1));
return fmin(opt, space, optimizers.rand.suggest, 1000);
`}
      >
        <TrialsTable trials={trials} />
      </Example>
    );
  }
}
