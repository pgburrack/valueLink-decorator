import React, { Component, PropTypes } from 'react';

/**
 * valueLink - decorator that adds support to onChange and valueLink
 * @param  {[React Component]} DecoratedComponent
 */
export default function valueLink(DecoratedComponent) {
	return (class ValueLinkDecorator extends Component {
			static propTypes = {
				valueLink: React.PropTypes.shape({
					value: React.PropTypes.string.isRequired,
					requestChange: React.PropTypes.func.isRequired
				}),
				onChange: React.PropTypes.func,
				value: React.PropTypes.string
			};

			static defaultProps = {
				onChange: () =>{},
				value: ''
			}

			constructor(props) {
				super(props);
			}

			render() {
				const { valueLink, value, onChange } = this.props;

				return (
					<DecoratedComponent {...this.props} valueLink={valueLink || {
						value: value,
						requestChange: onChange
					}}/>
				);
			}
		})
};
