import React from "react";
import { User } from "../../user";
import { loadUser } from "../../api";

// These are three pieces of state we must keep track of.
interface WithUserState {
  user: User | null;
  loading: boolean;
  error: string | null;
}

// The component we're wrapping must accept at least a `user`.
interface BaseComponentProps {
  user: User;
}

// This HOC takes in 3 components:
// 1. `Component` is rendered once the data is loaded.
// 2. `Loading` is rendered while loading.
// 3. `Error` is rendered if there's an error in loading the data.
export function withUser<P extends BaseComponentProps = BaseComponentProps>(
  Component: React.ComponentType<P>,
  Loading: React.ComponentType<{}>,
  Error: React.ComponentType<{}>
) {
  // WithUser's props will have all of the wrapped components props,
  // except for "user", and it will also have an "email" prop.
  //
  // For example, when given:
  //
  //   withUser<{ user: User, trialDaysRemaining: number }>
  //
  // The expected props will be:
  //
  //   type WithUserProps = { trialDaysRemaining: number, email: string }
  type WithUserProps = Pick<P, Exclude<keyof P, "user">> & { email: string };

  return class WithUser extends React.Component<WithUserProps, WithUserState> {
    state: WithUserState = { user: null, loading: true, error: null };

    componentDidMount() {
      this.loadUser(this.props.email);
    }

    componentDidUpdate(prevProps: WithUserProps) {
      if (prevProps.email !== this.props.email) {
        this.loadUser(this.props.email);
      }
    }

    loadUser = (email: string) => {
      loadUser(email)
        .then(this.setUser)
        .catch(this.setError);
    };

    setUser = (user: User) => this.setState({ user, loading: false });

    setError = (error: string) => this.setState({ error, loading: false });

    render() {
      if (this.state.loading) return <Loading />;
      if (this.state.error) return <Error />;

      let { email, ...componentProps } = this.props;

      // @ts-ignore
      return <Component {...componentProps} user={this.state.user} />;
    }
  };
}
