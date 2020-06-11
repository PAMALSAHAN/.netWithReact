using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Application.ActivityTable;
using Domain;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ActivityController : ControllerBase
    {
        private readonly IMediator _mediator;
        public ActivityController(IMediator mediator)
        {
            _mediator = mediator;

        }


        //Get all activity
        [HttpGet]
        public async Task<ActionResult<List<Activity>>> ListFromController(){
            
            return await _mediator.Send(new List.Query());
        }

        //Get one activity
        [HttpGet("{id}")]
        public async Task<ActionResult<Activity>> GetOneActivityController(Guid id){
            
            return await _mediator.Send(new Details.Query{Id=id});
        }


    }
}