import React from 'react';
import TensorflowExample from '../../components/TensorflowExample';
import mnistTensorflowModel from '../../components/editor/tfjs_examples/mnist';
// import testFunc from '../../components/editor/tfjs_tests/mnistTestFunc';
import { MnistData, MNIST_CLASSES } from '../../data/mnist';

class MnistPage extends React.Component {
  state = { data: undefined }
  async componentDidMount() {
    const data = new MnistData();
    await data.load();
    this.setState({ data }); // eslint-disable-line
  }
  render() {
    const { data } = this.state;
    return (
      <TensorflowExample
        name='Mnist tensorflow model'
        description='<br /><div>Find best model type (ConvNet vs DenseNet) and activation functions
         (for input and output layers) for the Mnist dataset.
        <p>
          Based on the Tensorflow.js Mnist example, found <a href = "https://github.com/tensorflow/tfjs-examples/tree/master/mnist">
          here</a>.
        <li>To change # of trials: replace the 20 on line 87 with # of trials</li></ul>
        <a href = https://medium.com/@martin_stoyanov/optimizing-hyperparameters-for-the-mnist-dataset-in-javascript-4cb8c17df940 target="_blank">Blog post</a> on this topic
          </p></div>'
        code={mnistTensorflowModel}
        data={data}
        // testFunc={testFunc}
        labels={MNIST_CLASSES}
      />
    );
  }
}
export default MnistPage;
