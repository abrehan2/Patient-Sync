// IMPORTS -
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { formFieldTypes } from "@/constants/form";
import { customFormProps } from "@/types/common";

const RenderField = ({
  field,
  props,
}: {
  field: any;
  props: customFormProps;
}) => {
  switch (props.fieldType) {
    case formFieldTypes.INPUT:
      return (
        <>
          <FormControl>
            <Input
              {...field}
              placeholder={props.placeholder}
              name={props.schemaKey}
            />
          </FormControl>
        </>
      );

    case formFieldTypes.PHONE_INPUT:
      return (
        <>
          <FormControl>
            <Input
              {...field}
              placeholder={props.placeholder}
              name={props.schemaKey}
            />
          </FormControl>
        </>
      );

    case formFieldTypes.DATE_PICKER:
      return (
        <>
          <FormControl>
            <Input {...field} type="date" name={props.schemaKey} />
          </FormControl>
        </>
      );

    case formFieldTypes.SKELETON:
      return props.renderSkeleton ? props.renderSkeleton(field) : null;

    default:
      break;
  }
};

export const CustomFormField: React.FC<customFormProps> = (props) => {
  const { control, schemaKey, fieldType } = props;

  return (
    <FormField
      control={control}
      name={schemaKey}
      render={({ field }) => (
        <FormItem>
          {fieldType !== formFieldTypes.CHECKBOX && (
            <>
              <FormLabel className="capitalize">{props.label}</FormLabel>
              <RenderField field={field} props={props} />
              <FormMessage className="shad-error" />
            </>
          )}
        </FormItem>
      )}
    />
  );
};
