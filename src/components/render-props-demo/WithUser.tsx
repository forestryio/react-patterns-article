import * as React from "react";
import { User } from "../../user";
import { loadUser } from "../../api";

// A component that provides the user through render children
interface WithUserProps {
  email: string;
  children(state: WithUserState): React.ReactNode;
}

interface WithUserState {
  data: User | null;
  loading: boolean;
  error: string | null;
}

export class WithUser extends React.Component<WithUserProps, WithUserState> {
  state: WithUserState = {
    data: null,
    loading: false,
    error: null
  };

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

  setUser = (data: User) => this.setState({ data, loading: false });

  setError = (error: string) => this.setState({ error, loading: false });

  render() {
    return this.props.children(this.state);
  }
}
