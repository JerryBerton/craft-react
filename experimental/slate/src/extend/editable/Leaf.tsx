import { NodeElement } from '@bertonjs/craft-core';
import { Overwrite } from '@bertonjs/craft-utils';
import React from 'react';
import { RenderLeafProps } from 'slate-react';

import { useSlateNode } from '../slate';

type LeafProps = Overwrite<
  RenderLeafProps,
  {
    leaf: {
      id: string;
      text: string;
    };
  }
>;

export const Leaf = (props: LeafProps) => {
  const { config } = useSlateNode();
  const LeafElement = config.resolvers.leaf;

  return <NodeElement id={props.leaf.id} render={<LeafElement {...props} />} />;
};
