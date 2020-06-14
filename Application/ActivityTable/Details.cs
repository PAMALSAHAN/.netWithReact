using System;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Persistence;

namespace Application.ActivityTable
{
    public class Details
    {
        //meka hadanne eka detail ekak ganna activity table eken
        public class Query : IRequest<Activity>
        {
            public Guid Id { get; set; }

        }

        public class Handler : IRequestHandler<Query, Activity>
        {
            private readonly DataContex _datacontex;

            public Handler(DataContex datacontex)
            {
                _datacontex = datacontex;

            }
            public async Task<Activity> Handle(Query request, CancellationToken cancellationToken)
            {
                var activity=await _datacontex.ActivityTbl.FindAsync(request.Id);
                return activity;
            }
        }
    }
}