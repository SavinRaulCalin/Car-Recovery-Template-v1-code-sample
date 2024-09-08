//  !##################!  //
//  * ----- Base ----- *  //
//  !##################!  //
type Event = React.KeyboardEvent | React.MouseEvent;
type Generic<T> = T;

//  !####################!  //
//  * ----- Navbar ----- *  //
//  !####################!  //
export type TnavEvent = Event;
export type TnavMobile = { onToggle: (e: Event) => void; isOpen: boolean };

//  !###########################!  //
//  * ----- COMMON - CARD ----- *  //
//  !###########################!  //
export type Tparagraph = {
  paragraph: string;
  href?: never;
  value?: never;
  attr?: never;
};
export type Tphone = {
  href: `${"tel:"}${string}`;
  value: string;
  paragraph?: never;
  attr?: never;
};
export type Temail = {
  href: `${"mailto:"}${string}`;
  value: string;
  paragraph?: never;
  attr?: never;
};
export type Tsocial = {
  href: `${"https:"}${string}`;
  value: string;
  paragraph?: never;
  attr: Tattr;
};
export type Tattr = { target: "_blank"; rel: "noreferrer" };
export type Tvariant = Tparagraph | Tphone | Temail | Tsocial;

export type Tbase = {
  svg: JSX.Element;
  title: { text: string; variant: "h2" | "h3" };
  paragraph: string;
  elClass?: string;
};

//  !##################!  //
//  * ----- FORM ----- *  //
//  !##################!  //
export type TonChange<T = string> = { target: { name: string; value: T } };
export type TonFocus<T = string> = { name: T };
export type Tindexable = { [key: string]: string };
export type TonSubmitEvent = React.FormEvent<HTMLFormElement>;
type TbaseFormElement = {
  label: string;
  name: string;
  value: string;
  error: string;
};
export type Tinput = {
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  onFocus: ({ name }: { name: string }) => void;
  type: Generic<"email" | "password" | "text">;
} & TbaseFormElement;

export type Ttextarea = {
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onFocus: ({ name }: { name: string }) => void;
  label: string;
  name: string;
  value: string | undefined | null;
  error: string;
};
