import { Book } from "./book";
import { WithCommon } from "./common";
import { Staff } from "./staff";
import { Subscription, SubscriptionDetail } from "./subscription";

export type Borrow = WithCommon<{
  book_id: string;
  subscription_id: string;
  staff_id: string;
  borrowed_at: string;
  due_at: string;
  returned_at?: string;
  book: Pick<Book, "id" | "title" | "code">;
  subscription: Pick<
    Subscription,
    "id" | "user_id" | "membership_id" | "user" | "memberhip"
  >;
  staff: Pick<Staff, "id" | "name">;
}>;

export type BorrowDetail = Omit<Borrow, "book" | "subscription" | "staff"> & {
  book: Book;
  subscription: SubscriptionDetail;
  staff: Staff;
};