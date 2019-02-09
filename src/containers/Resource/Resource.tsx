import React from 'react';
import ResourceComponent from 'components/Resource';
import { getValue, setValue } from 'utilities/storage';
import { FAVORITES } from 'constants/lsKeys';
import * as TSection from 'types/entities/Section';
import * as T from './Resource.types';

class Resource extends React.PureComponent<T.Props, T.State> {
  constructor(props: T.Props) {
    super(props);
    const { data } = props;
    const value = getValue(FAVORITES);

    const liked = !value ? false : value.includes(data.id);

    this.state = { liked };
  }

  handleLike = () => {
    const { data } = this.props;
    const value = getValue(FAVORITES) || [];

    setValue(FAVORITES,[...value, data.id]);
    this.setState({ liked: true });
  };

  handleDislike = () => {
    const { data } = this.props;
    const value = getValue(FAVORITES);

    if (!value) return;

    setValue(FAVORITES, value.filter((id: string) => id !== data.id));
    this.setState({ liked: false });
  };

  render() {
    const { liked } = this.state;
    const { data } = this.props;

    return (
      <ResourceComponent
        full={data.sectionId === TSection.ids.people}
        src={data.src}
        title={data.title}
        text={data.text}
        href={data.href}
        tags={data.tags}
        liked={liked}
        onLike={this.handleLike}
        onDislike={this.handleDislike}
      />
    )
  }
}

export default Resource;
