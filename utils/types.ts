export type Event = {
  id: number;
  date: string;
  time: string;
  _sportId: number;
  _homeTeamId: number;
  _awayTeamId: number;
};

// potential types for the response data from the API
export type Data =
  | {
      error: string;
    }
  | {
      event: Event;
    }
  | {
      events: Event[];
    }
  | {
      message: string;
    }
  | {
      sports: Sport[];
    }
  | {
      teams: Team[];
    };

export type Sport = {
  id: number;
  name: string;
};

export type Team = {
  id: number;
  name: string;
  _sportId: number;
};
