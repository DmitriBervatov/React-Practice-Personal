interface RenderList2Props {
  data: any[];
  resourceName: string;
  dataToRender: any;
}

const RenderList2 = ({
  data,
  resourceName,
  dataToRender: ItemComponent,
}: RenderList2Props) => {

  return (
    <div className="product-list">
      {data.map((item, index) => (
        <ItemComponent key={index} {...{ [resourceName]: item }} />
      ))}
    </div>
  );
};

export default RenderList2;
