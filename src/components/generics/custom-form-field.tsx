// IMPORTS -
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
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

    case formFieldTypes.SELECT:
      return (
        <FormControl>
          <Select onValueChange={field.onChange} defaultValue={field.value}>
            <SelectTrigger>
              <SelectValue placeholder={props.placeholder} />
            </SelectTrigger>
            <SelectContent className="bg-slate-50">
              {props.children}
            </SelectContent>
          </Select>
        </FormControl>
      );

    case formFieldTypes.TEXTAREA:
      return (
        <>
          <FormControl>
            <Textarea placeholder={props.placeholder} {...field} />
          </FormControl>
        </>
      );

    default:
      break;
  }
};

export const CustomFormField: React.FC<customFormProps> = (props) => {
  const { control, schemaKey } = props;

  return (
    <>
      <FormField
        control={control}
        name={schemaKey}
        render={({ field }) => (
          <FormItem>
            <FormLabel className="capitalize">{props.label}</FormLabel>
            <RenderField field={field} props={props} />
            <FormMessage id={schemaKey} />
          </FormItem>
        )}
      />
    </>
  );
};
